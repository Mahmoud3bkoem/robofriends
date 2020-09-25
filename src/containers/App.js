import React, {Component} from 'react';
import {robots} from '../components/Robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots, // in the newest version of this App this should be an empty array --> robots:[],
            searchfield: '',
        }
    }

    // Newest App: There should be another mehtod here like this:
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users') // This URL is just an ex. means the place where u want to grab the data from..
    //     .then(response => response.json())
    //     .then(users => {this.setState({ robots: users })});
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // This if statement is here coz irl the response has some sort of delay so it shows "loading" instead of nothing.. 
        if (!robots.length) {
            return (
                <h1 className="tc f1" 
                style={{color: '#0ccac4'}}
                >Loading...</h1>
            )
        } else {
            return (
                <div className="tc">
                    <h1 className="f1" 
                        style={{color: '#0ccac4'}}
                        >   RoboFriends
                    </h1>
                    < SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <CardList robots= { filteredRobots } />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;