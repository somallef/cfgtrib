import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';
import { finalize } from 'rxjs';
import { Tributo } from '../tributo';
import { TributoService } from '../tributo.service';

@Component({
  selector: 'cfg-tributo-list',
  templateUrl: './tributo-list.component.html',
  styleUrls: ['./tributo-list.component.css']
})
export class TributoListComponent implements OnInit {

  itensDaTabela: Tributo[] = [];
	hasNext: boolean = true;
	paginaAtual: number = 0;
	colunasDaTabela: Array<PoTableColumn> = [];
	camposFiltroAvancado: Array<PoPageDynamicSearchFilters> = [];
	carregandoTabela: boolean = false;
	filtrosAplicados: any;

	constructor(private tributoService: TributoService) {}

	ngOnInit(): void {
		this.obterMetadados();
		this.carregarDados();
	}

	obterMetadados(): void {
		this.tributoService.obterMetadados().subscribe(res => { 
			this.colunasDaTabela = res;
			this.camposFiltroAvancado = res.map((campo) => { 
				return campo.property == 'descricao' ? {...campo, gridColumns: 12} : {...campo, gridColumns: 6};
			})
		});
	}

	carregarDados(modoBusca: boolean = false) {
		
		this.carregandoTabela = true;

		if (modoBusca) {
			this.paginaAtual = 1;
			this.itensDaTabela = [];
		}

		this.tributoService
			.listar(this.paginaAtual++, this.filtrosAplicados)
			.pipe(finalize(() => (this.carregandoTabela = false)))
			.subscribe((res) => {
				this.itensDaTabela = this.itensDaTabela.concat(res.items);
				this.hasNext = res.hasNext;
			})
	}

	buscaRapida(id: string) {
		if (id) {
			this.paginaAtual = 0;
			this.filtrosAplicados = {'tributo': id};
			this.carregarDados(true);
		}    
	}

	mudaFiltros(disclaimers: any[]) {

		this.filtrosAplicados = {};
		if (disclaimers.length > 0 ) {
			disclaimers.forEach(item => {
				this.filtrosAplicados[item.property] = item.value;
			});
		}

		this.carregarDados(true);
	}

	buscaAvancada(filtros: Object) {
		if (filtros) {
			this.paginaAtual = 0;
			this.filtrosAplicados = filtros;
			this.carregarDados(true);
		}
	}

}
