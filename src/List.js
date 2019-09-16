import React, { Component } from "react";

export default class List extends Component {
    render() {
        const planets = this.props.planets;

        return (
            <div className="container">
                {planets.map(p => {
                    return (
                        <div className="planets" key={p.url}>
                            <h2>{p.name}</h2>
                            <p>Climate: {p.climate}</p>
                            <p>Terrain: {p.terrain}</p>

                        </div>
                    );
                })}
            </div>
        );
    }
}
