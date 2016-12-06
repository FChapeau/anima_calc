let React = require('react');
let reactdom = require('react-dom');

class App extends React.Component {
    constructor(props){
        super(props);
        this.state =
            {
                attack: 0,
                defense: 0,
                ip: 0,
                damage: 0
            };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let nextState = this.state;
        nextState[event.target.name] = event.target.value;
        this.setState(nextState);
    }

    calculateDamagePercent(attack, defense, ip){
        return Math.max(Math.floor(((attack - defense) - (ip * 10 + 20))/10), 0)*10;
    }

    calculateDamage(damage, percent){
        return Math.floor(damage*percent/100);
    }

    calculateCounterAttack(attack,defense){
        return Math.min(Math.ceil((defense-attack)/5)*5, 150);
    }

    lastSentence(percent){
        if (percent === 0){
            const margin = this.state.attack - this.state.defense;

            if (margin >= 0) {
                return (
                    <p className="noDmg">l'attaque touche mais ne fait aucun dégat.</p>
                )
            }
            else {
                return (
                    <p className="counter">le défenseur a droit à une contre-attaque avec un bonus de +{this.calculateCounterAttack(this.state.attack, this.state.defense)}</p>
                )
            }
        }
        else if (percent > 0) {
            return (
                <p className="showDmg">les dégats sont de {this.calculateDamage(this.state.damage, this.calculateDamagePercent(this.state.attack, this.state.defense, this.state.ip)) + " "}
                ({this.calculateDamagePercent(this.state.attack, this.state.defense, this.state.ip)}% des dégats de l'arme).</p>
            );
        }
        else {

        }
    }

    render(){
        return (
            <div className="dmgForm">
              <div className="sentence">
                  <p><label>Pour un résultat d'attaque de </label><input type="number" value={this.state.attack} name="attack" onChange={this.handleChange}/>,</p>
                  <p><label>un résultat de défense de </label><input name="defense" value={this.state.defense} type="number" onChange={this.handleChange}/>,</p>
                  <p><label>un IP de </label><input name="ip" type="number" value={this.state.ip} onChange={this.handleChange}/></p>
                  <p><label>et un dégat d'arme de </label><input name="damage" value={this.state.damage} type="number" onChange={this.handleChange}/>,</p>
              </div>
              <div className="result">
                {this.lastSentence(this.calculateDamagePercent(this.state.attack, this.state.defense, this.state.ip))}
              </div>
            </div>
        );
    }
}



reactdom.render(
  <App />,
  document.getElementById("content")
);
