-Adicionei os métodos getById, getAll, update e delete junto do método create em BookController. Em routes.ts adicionei os caminhos dos novos métodos.
-Em BookService, fiz com que as variáveis dos métodos pasassem um tipo, como o professor aconselhou em aula (não passar book: any em todos os métodos).
-Em BookService, usei findByIdAndUpdate() e findByIdAndDelete() em update e delete.
-Para não precisar instanciar um novo BookService() em todos os métodos, em BookController criei um construtor que instanciou BookService() e utilizei ele nos métodos.
-Dentro dos métodos assincronos de BookController, adicionei try cacth, para caso acontecesse um erro, retorná-lo.

Para essa atividade, utilizei os seguintes sites:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

https://www.typescriptlang.org/pt/play#example/async-

https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
