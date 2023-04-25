var addMoney = document.querySelector('#deposite')
var withdraw = document.querySelector('#withdraw')
var input = document.querySelector('#input-money')
var show = document.querySelector('#show')
var balanceAlert = document.querySelector('.card-body')



function BankAcount(balance = []){


    this.balance = balance
    
    function showAlert(type, text){
        var divAl = document.createElement('div')
        divAl.className = `alert ${type} m-3`
        divAl.textContent = `${text}`
        divAl.role = 'alert'
        balanceAlert.appendChild(divAl)
    
        setTimeout( () => {
          divAl.remove()
        }, 2500)
    
    }
    
    this.addBalance = function(){
        this.chashIn = +input.value
        balance += this.chashIn
        if(!this.chashIn){
            showAlert("alert-danger", "Please write the amount")
            return
        }
        showAlert("alert-success", "Your balance has been updated")
        
        input.value = ''
        console.log('balance',balance)
    
        
        
        
        
    }

    this.showBalance = function(){
        

        showAlert("alert-success", `Your have ${balance}$ in your account`)
        
    }
    
    
    this.removeBalance =function(){
        this.minus = +input.value
        if(!this.minus){
            showAlert("alert-danger", "Please write the amount")
            return
        }
        if(balance === 0 ){
            showAlert("alert-danger", `You have ${balance} money`)
            return
        }
        if((balance - this.minus) < 0){
            showAlert("alert-danger", "You don't have enough money in your bank account")
            return
        }
        balance = balance - this.minus
        showAlert("alert-success", "Your balance has been updated")
        input.value = ''

        
    }
    
    




}

var customerKenanSemenderli = new BankAcount(0);


addMoney.onclick = customerKenanSemenderli.addBalance
withdraw.onclick = customerKenanSemenderli.removeBalance
show.onclick = customerKenanSemenderli.showBalance





