console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
    monedas: number;

    constructor(monedas: number = 0){
        this.monedas = monedas;
    }
    
    play(): string {

        this.monedas += 1

        const booleanoAleatorio1: boolean = Math.random() < 0.5;
        const booleanoAleatorio2: boolean = Math.random() < 0.5;
        const booleanoAleatorio3: boolean = Math.random() < 0.5;

        if (booleanoAleatorio1 && booleanoAleatorio2 && booleanoAleatorio3){

            const premio: number = this.monedas;

            // reiniciamos las monedas
            this.monedas = 0;
            
            return `Congratulations!!!. You won ${premio} coins!!`;
        }

        return "Good luck next time!!"
    }

}

const machine1 = new SlotMachine();
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());
console.log(machine1.play());

