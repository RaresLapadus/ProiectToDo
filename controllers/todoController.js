var data = [{item: 'get milk'},{item: 'get iceCream'},{item: 'get coffee'}];

module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', function(req, res){

  });

  app.delete('/todo', function(req, res){

  });

};
