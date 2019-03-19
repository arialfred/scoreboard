import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';

class ScoreInput extends React.Component {
    state = {
        name: '',
        score: 0
    }

    onSubmit = event => {
        event.preventDefault();
        let name = this.state.name.trim();
        let score = this.state.score;

        // To do: better validation, show error message
        if (name.length === 0) {
            return;
        }

        this.setState({
            name: '',
            score: 0
        });

        this.props.onSubmit(name, score);
    }

    render() {
        return (
            <div>
                <h5>Add new score</h5>
                {this.props.error === true &&
                <h6>Error adding score. Please try again later.</h6>
                }
                {this.props.error === false &&
                <h6>Score added successfully.</h6>
                }
                <Form onSubmit={this.onSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    required
                                    maxLength={50}
                                    value={this.state.name}
                                    onChange={event => this.setState({name: event.target.value})} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="score">Score</Label>
                                <Input
                                    type="number"
                                    id="score"
                                    min="0"
                                    max="1000000000000"
                                    value={this.state.score}
                                    onChange={event => this.setState({score: event.target.value})} />
                                <FormText color="muted">
                                    Both name and score are required. Score must be between 0 and 1 000 000 000 000.
                                </FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button color="primary" style={{'minWidth':'120px'}}>Add</Button>
                </Form>
            </div>
        )
    }
}

export default ScoreInput;