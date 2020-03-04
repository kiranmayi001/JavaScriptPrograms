


/**
 * @function created for singleton with name, User.
 */
module.exports={
    User:()=> {
      var instance;
      
      if(typeof(instance) === null) {
        return instance;
      }
    
      else{
      this.firstname = 'john';
      this.lname = 'Doe';
      this.age=78;
      instance = this; //object created and using the using instance
      return this;
    }
    }
    }