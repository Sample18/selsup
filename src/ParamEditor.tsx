import React, { ChangeEvent } from 'react';

interface Param {
    id: number;
    name: string;
    type: string;
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Color {
    id: number;
    rgb: string;
    hex: string;
}

interface Model {
    paramValues: ParamValue[];
    colors: Color[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    model: Model;
}

class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            model: { ...props.model },
        };
    }

    private handleParamChange = (paramId: number, value: string) => {
        const { model } = this.state;

        const paramValueIndex = model.paramValues.findIndex(
            (paramValue) => paramValue.paramId === paramId
        );

        if (paramValueIndex !== -1) {
            model.paramValues[paramValueIndex].value = value;
        } else {
            model.paramValues.push({ paramId, value });
        }

        this.setState({ model });
    };

    public getModel(): Model {
        return this.state.model;
    }

    render() {
        const { params } = this.props;
        const { model } = this.state;

        return (
            <div>
                {params.map((param) => (
                    <div key={param.id}>
                        <label htmlFor={`param-${param.id}`}>{param.name}</label>
                        <input
                            type="text"
                            id={`param-${param.id}`}
                            value={
                                model.paramValues.find((paramValue) => paramValue.paramId === param.id)?.value || ''
                            }
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                this.handleParamChange(param.id, e.target.value)
                            }
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default ParamEditor;