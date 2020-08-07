module.exports = templateData => {

    // destructure projects and about data from templateData based on their property key names
    // const { projects, about, ...header } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel='stylesheet' href="./style.css">
        <title>My Dev Team Page</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-center" style="padding: 20px">
            <div class="container">
              <h1 class="display-4">My Dev Team</h1>
              <p class="lead">Checkout who is on our team!</p>
            </div>
          </div>
    
        <div class="container">
            <div class="row justify-content-center">
            
                <div class="card-deck"> 
                    <div class="card" style="width: 18rem;">
                        <div class="card-header text-center">
                            <h2 class="card-subtitle mb-2">Adam</h3>
                            <h4 class="card-subtitle mb-2"><i class="glyphicon glyphicon-king" aria-hidden="true"></i> Team Manager</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 1</li>
                            <li class="list-group-item">Email: <a href="mailto:email@gmail.com" target="_top">email@email.com</a></li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <div class="card-header text-center">
                            <h2 class="card-subtitle mb-2">Bill</h3>
                            <h4 class="card-subtitle mb-2"><i class="glyphicon glyphicon-wrench" aria-hidden="true"></i> Engineer</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 2</li>
                            <li class="list-group-item">Email: <a href="mailto:email@gmail.com" target="_top">email@email.com</a></li>
                            <li class="list-group-item">Office Number: 2</li>
                        </ul>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <div class="card-header text-center">
                            <h2 class="card-subtitle mb-2">Ted</h3>
                            <h4 class="card-subtitle mb-2"><i class="glyphicon glyphicon-education" aria-hidden="true"></i> Intern</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 3</li>
                            <li class="list-group-item">Email: <a href="mailto:email@gmail.com" target="_top">email@email.com</a></li>
                            <li class="list-group-item">Office Number: 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};