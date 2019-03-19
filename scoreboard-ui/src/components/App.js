import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { getScores, addScore } from '../apis/scoreboard.js';
import ScoreInput from './ScoreInput';
import ScoreList from './ScoreList';

class App extends React.Component {
    state = {
        scores: [],
        errorGettingScores: null,
        errorAddingScore: null
    }

    updateScores() {
        this.setState({
            scores: [],
            errorGettingScores: null
        });
        getScores().then(
           result => {
               this.setState({
                   scores: result.data,
                   errorGettingScores: false
               });
           }).catch(
               error => {
                this.setState({
                    errorGettingScores: true
                });
            }
        )
    }

    onScoreInputSubmit = (name, score) => {
        this.setState({
            errorAddingScore: null
        });
        addScore(name, score).then(
            result => {
                this.setState({
                    errorAddingScore: false
                });
                this.updateScores();
                return true;
            }).catch(
            error => {
                this.setState({
                    errorAddingScore: true
                });
                return false;
            }
        );
    }

    componentDidMount() {
        this.updateScores();
    }

    render() {
        return (
            <Container>
                <Navbar color="light" light>
                    <NavbarBrand>Scoreboard</NavbarBrand>
                </Navbar>

                <div style={{'marginTop': '30px'}}>
                    <ScoreList scores={this.state.scores} error={this.state.errorGettingScores} />
                </div>

                <div style={{'marginTop': '30px'}}>
                    <ScoreInput onSubmit={this.onScoreInputSubmit} error={this.state.errorAddingScore} />
                </div>
            </Container>
        )
    }
}

export default App;