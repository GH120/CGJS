class Escalar {

    constructor(valor){
        this.valor = valor;
    }

    setName(nome){
        this.name = nome;
        return this;
    }

    declararVariavel(nome){
        this.historico = {declarar: this.value}
        return this.setName(nome);
    }


    get value(){ return (this.historico)? this.historico : this.name}
}

class Vetor {

    constructor(x,y,z){
        this.array = [x,y,z];
        this.x = x;
        this.y = y;
        this.z = z;
    }

    setName(nome){
        this.name = nome;
        return this;
    }

    mais(vetor){
        const novo  = new Vetor(this.x + vetor.x, this.y + vetor.y, this.z + vetor.z);
        novo.historico = {soma: [this.value, vetor.value]};
        return novo;
    }

    declararVariavel(nome){
        const novo = new Vetor(this.x,this.y, this.z).setName(nome);
        novo.historico = {declarar: this.value};
        return novo;
    }

    escalar(vetor){
        const novo = new Escalar(this.x * vetor.x + this.y * vetor.y + this.z * vetor.z)
        novo.historico = {escalar: [this.value, vetor.value]};
        return novo;
    }

    // igual(vetor){
    //     this.historico = vetor.historico;
    //     return this;
    // }

    get value(){ return (this.name)? this.name : this.historico}
}

function colisaoObjeto(p0,dr){

    const centro = new Vetor(1,2,2).setName("centro");
    
    const w = p0.mais(centro).declararVariavel("w");
    
    const a = dr.escalar(dr);
    const b = w.escalar(dr)// * 2; // adicionar symbol *
    const c = w.escalar(w) //- raio*raio; // adicionar symbol -

    // Vetor pi = intersecaoRaio(a,b,c,p0,dr);

    // if(pi == null) return null;

    // return getPonto(pi, normal(pi));

    return [w,a,b,c];

    
}

const b = new Vetor(1,2,3).setName("b");

const c = b.mais(b.mais(b)).declararVariavel("c");

const d = b.escalar(c);

const e = new Vetor(3,3,2).setName("e")

colisaoObjeto(b,e);