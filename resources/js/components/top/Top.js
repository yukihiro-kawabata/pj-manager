import React, {Component} from "react";

class TopComponent extends Component {
    render() {
        return (
            <table className="table bg-light">
                <thead>
                    <tr>
                        <th>1</th><th>2</th><th>3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td><td>b</td><td>c</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default TopComponent;
