import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
    HelloWord(): string {
      return 'hello-world';
    
  }
  Bsm(): string {
    return 'comunicação<br> responsabilidade pessoal<br> trabalho em equipe<br> persistencia<br> orientação ao futuro<br> proatividade<br>metalidade de crescimento<br> atenção aos detalhes';

  }
objetivo(): string {
  return 'objetivo aprender nest.js e todo conteudo passado em sala';
}
}
