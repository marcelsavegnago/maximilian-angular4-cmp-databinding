import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testserver',content:'Just a teste!'}];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }

    onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
    }

    onChangeFirst(){
      if(this.serverElements[0]) {
        this.serverElements[0].name = "Changed!";
      } else
      console.log('Lista de elementos está vazia')
    }

    onDestroyFirst(){
      this.serverElements.splice(0,1);
    }


}
