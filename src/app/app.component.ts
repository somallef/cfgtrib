import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Regras fiscais',
      subItems: [
        { label: 'Cadastros', 
          subItems: [
            { label: 'Tributo', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Unidade ref. fiscal', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Tabela progressiva', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Regras por NCM', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Dependentes', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Regras de códigos de prestação de serviço', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Código de situação tributária', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Guia de escrituração', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Código de receita', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Indicadores econômicos FCA', action: this.printMenuAction.bind(this), link: '' },
          ] 
        },
        { label: 'Perfis',
          subItems: [
            { label: 'Perfil de produto', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Perfil de operação', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Perfil de participante', action: this.printMenuAction.bind(this), link: '' },
            { label: 'Perfil de origem/destino', action: this.printMenuAction.bind(this), link: '' }
          ]
        },
        { label: 'Regras de cálculo',
        subItems: [
          { label: 'Regra de base de cálculo', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Regra de alíquota', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Regra de escrituração', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Regra de cálculo (Documentos fiscais)', action: this.printMenuAction.bind(this), link: '' }
        ]
      },
        { label: 'Regras de ajuste de lançamento',
        subItems: [
          { label: 'Cadastro de mensagem', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Regra de ajuste de lançamento', action: this.printMenuAction.bind(this), link: '' }
        ]
      },
        { label: 'Apuração',
        subItems: [
          { label: 'Regra de título da apuração', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Regra de apuração', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Apuração dos tributos genéricos', action: this.printMenuAction.bind(this), link: '' }
        ]
      },
        { label: 'Relatórios',
        subItems: [
          { label: 'Tributos genéricos x Documento fiscal', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Conferência da escrituração', action: this.printMenuAction.bind(this), link: '' },
          { label: 'Relatório de conferência do estorno de ICMS', action: this.printMenuAction.bind(this), link: '' }
        ]
      },
      ]
    }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  printMenuAction(menu: PoMenuItem) {
    console.log(menu.label);
  }

}
