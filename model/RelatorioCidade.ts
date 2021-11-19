export interface Cidade {
    nomeCidade: string,
    resultado: ResultadoCidade[]
}


export interface ResultadoCidade{
    meses: string[],
    turbidezR: number[],
    turbidezC: number[],
    corR: number[],
    corC: number[],
    cloroR: number[],
    cloroC: number[],
    coliformeR: number[],
    coliformeC: number[],
    coliformeE: number []
}