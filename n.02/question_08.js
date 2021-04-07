//<< Please associate the "testData" constructor function below with a method called "mymethod";

function testData(first, second){
    this.first = 'first';
    this.second = 'second';
    this.checkData = mymethod; // <-
}