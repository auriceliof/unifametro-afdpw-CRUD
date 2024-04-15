export function update(inputs: any, name: string, newValue: any) {
    return{ ...inputs, [name]: { ...inputs[name], value: newValue} };
}

export function updateAll(inputs: any, newValues: any) {

    const newInputs: any = {};
    for (var name in inputs) {
        newInputs[name] = { ...inputs[name], value: newValues[name] };
    }
    return newInputs;
}
