function getShaderCode(objeto){

    let code = "";
  
    let vec3 = (vetor) => `vec3(${vetor[0]},${vetor[1]},${vetor[2] - 100})`;

    let triangulo = (objeto) => `Triangulo(${vec3(objeto.p1)}, ${vec3(objeto.p2)}, ${vec3(objeto.p3)}, ${vec3(objeto.p3)})`
  
    // if(objeto.fronteira){
  
    //   const esfera = objeto.fronteira;
  
    //   code = code.concat(`if(acertou(vPosition - ${vec3(esfera.centro)}, raio, ${esfera.raio})){
    //   `);
    // }
  
    if(objeto.componentes){
  
      for(const componente of objeto.componentes){
        code = code.concat("  " + getShaderCode(componente));
      }
  
    }
    else{
      code = code.concat(`ponto = maisProximo(ponto, colisao(${triangulo(objeto)},vPosition,raio));
    `);
    }
  
    // if(objeto.fronteira)
    //     code = code.concat(`
    //     }
    // `);
  
    return code;
  }
  
export default compilador = getShaderCode({
    "fronteira":
    {
    "centro":[-9.395262345890387E-15, 23.636525097019245, 1.684730217948005E-14],
    "raio":56.40859853072523
    },
    "componentes": [
    {
    "fronteira":
    {
    "centro":[-0.035250000000008, 21.398753499999984, 0.05938200000000293],
    "raio":51.95298163770559
    },
    "componentes": [
    {
    "fronteira":
    {
    "centro":[-0.05021300000000747, 35.67015099999961, 0.0828445000000096],
    "raio":47.727934597384824
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[-45.376133, 33.398083, 14.859665],
    "p2":[-45.376133, 33.398083, 13.468331],
    "p3":[45.243862, 33.398083, 13.468331]
    },
    {
    "p1":[-45.376133, 33.398083, 14.859665],
    "p2":[45.243862, 33.398083, 13.468331],
    "p3":[45.243862, 33.398083, 14.859665]
    },
    {
    "p1":[-45.376133, 33.398083, 14.859665],
    "p2":[45.243862, 33.398083, 14.859665],
    "p3":[45.243862, 37.942219, 14.859665]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-45.376133, 33.398083, 14.859665],
    "p2":[45.243862, 37.942219, 14.859665],
    "p3":[-45.376133, 37.942219, 14.859665]
    },
    {
    "p1":[45.243862, 33.398083, 13.468331],
    "p2":[-45.376133, 33.398083, 13.468331],
    "p3":[-45.376133, 37.942219, 13.468331]
    },
    {
    "p1":[45.243862, 33.398083, 13.468331],
    "p2":[-45.376133, 37.942219, 13.468331],
    "p3":[45.243862, 37.942219, 13.468331]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-45.375404, 33.398083, -13.302643],
    "p2":[-45.375404, 33.398083, -14.693976],
    "p3":[45.275707, 33.398083, -14.693976]
    },
    {
    "p1":[-45.375404, 33.398083, -13.302643],
    "p2":[45.275707, 33.398083, -14.693976],
    "p3":[45.275707, 33.398083, -13.302643]
    },
    {
    "p1":[-45.375404, 33.398083, -13.302643],
    "p2":[45.275707, 33.398083, -13.302643],
    "p3":[45.275707, 37.942219, -13.302643]
    },
    {
    "p1":[-45.375404, 33.398083, -13.302643],
    "p2":[45.275707, 37.942219, -13.302643],
    "p3":[-45.375404, 37.942219, -13.302643]
    },
    {
    "p1":[45.275707, 33.398083, -14.693976],
    "p2":[-45.375404, 33.398083, -14.693976],
    "p3":[-45.375404, 37.942219, -14.693976]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[-0.03524399999999863, 35.67015099999986, 0.05938200000000608],
    "raio":49.300991586650234
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[45.275707, 33.398083, -14.693976],
    "p2":[-45.375404, 37.942219, -14.693976],
    "p3":[45.275707, 37.942219, -14.693976]
    },
    {
    "p1":[-47.690887, 33.398083, -12.354926],
    "p2":[-46.299561, 33.398083, -12.354926],
    "p3":[-46.299561, 33.398083, 12.48376]
    },
    {
    "p1":[-47.690887, 33.398083, -12.354926],
    "p2":[-46.299561, 33.398083, 12.48376],
    "p3":[-47.690887, 33.398083, 12.48376]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-47.690887, 33.398083, -12.354926],
    "p2":[-47.690887, 33.398083, 12.48376],
    "p3":[-47.690887, 37.942219, 12.48376]
    },
    {
    "p1":[-47.690887, 33.398083, -12.354926],
    "p2":[-47.690887, 37.942219, 12.48376],
    "p3":[-47.690887, 37.942219, -12.354926]
    },
    {
    "p1":[-46.299561, 33.398083, 12.48376],
    "p2":[-46.299561, 33.398083, -12.354926],
    "p3":[-46.299561, 37.942219, -12.354926]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-46.299561, 33.398083, 12.48376],
    "p2":[-46.299561, 37.942219, -12.354926],
    "p3":[-46.299561, 37.942219, 12.48376]
    },
    {
    "p1":[46.229061, 33.398083, -12.364996],
    "p2":[47.620399, 33.398083, -12.364996],
    "p3":[47.620399, 33.398083, 12.463388]
    },
    {
    "p1":[46.229061, 33.398083, -12.364996],
    "p2":[47.620399, 33.398083, 12.463388],
    "p3":[46.229061, 33.398083, 12.463388]
    },
    {
    "p1":[46.229061, 33.398083, -12.364996],
    "p2":[46.229061, 33.398083, 12.463388],
    "p3":[46.229061, 37.942219, 12.463388]
    },
    {
    "p1":[46.229061, 33.398083, -12.364996],
    "p2":[46.229061, 37.942219, 12.463388],
    "p3":[46.229061, 37.942219, -12.364996]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[-0.03524999999998937, 21.39875350000001, 0.0593819999999976],
    "raio":51.95298163770561
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[47.620399, 33.398083, 12.463388],
    "p2":[47.620399, 33.398083, -12.364996],
    "p3":[47.620399, 37.942219, -12.364996]
    },
    {
    "p1":[47.620399, 33.398083, 12.463388],
    "p2":[47.620399, 37.942219, -12.364996],
    "p3":[47.620399, 37.942219, 12.463388]
    },
    {
    "p1":[-47.690899, 4.855288, -12.354926],
    "p2":[-46.299561, 4.855288, -12.354926],
    "p3":[-46.299561, 4.855288, 12.48376]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-47.690899, 4.855288, -12.354926],
    "p2":[-46.299561, 4.855288, 12.48376],
    "p3":[-47.690899, 4.855288, 12.48376]
    },
    {
    "p1":[-47.690899, 8.523391, -12.354926],
    "p2":[-47.690899, 8.523391, 12.48376],
    "p3":[-46.299561, 8.523391, 12.48376]
    },
    {
    "p1":[-47.690899, 8.523391, -12.354926],
    "p2":[-46.299561, 8.523391, 12.48376],
    "p3":[-46.299561, 8.523391, -12.354926]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-47.690899, 4.855288, -12.354926],
    "p2":[-47.690899, 4.855288, 12.48376],
    "p3":[-47.690899, 8.523391, 12.48376]
    },
    {
    "p1":[-47.690899, 4.855288, -12.354926],
    "p2":[-47.690899, 8.523391, 12.48376],
    "p3":[-47.690899, 8.523391, -12.354926]
    },
    {
    "p1":[-46.299561, 4.855288, 12.48376],
    "p2":[-46.299561, 4.855288, -12.354926],
    "p3":[-46.299561, 8.523391, -12.354926]
    },
    {
    "p1":[-46.299561, 4.855288, 12.48376],
    "p2":[-46.299561, 8.523391, -12.354926],
    "p3":[-46.299561, 8.523391, 12.48376]
    },
    {
    "p1":[46.229076, 4.855288, -12.364996],
    "p2":[47.620399, 4.855288, -12.364996],
    "p3":[47.620399, 4.855288, 12.463388]
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[-0.05436149999999834, 18.99319950000001, 0.05869949999999898],
    "raio":54.5646241172005
    },
    "componentes": [
    {
    "fronteira":
    {
    "centro":[46.92294699999999, 18.9972925, 4.590117202002205],
    "raio":22.089784839672696
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[46.229076, 4.855288, -12.364996],
    "p2":[47.620399, 4.855288, 12.463388],
    "p3":[46.229076, 4.855288, 12.463388]
    },
    {
    "p1":[46.229076, 8.523391, -12.364996],
    "p2":[46.229076, 8.523391, 12.463388],
    "p3":[47.620399, 8.523391, 12.463388]
    },
    {
    "p1":[46.229076, 8.523391, -12.364996],
    "p2":[47.620399, 8.523391, 12.463388],
    "p3":[47.620399, 8.523391, -12.364996]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[46.229076, 4.855288, -12.364996],
    "p2":[46.229076, 4.855288, 12.463388],
    "p3":[46.229076, 8.523391, 12.463388]
    },
    {
    "p1":[46.229076, 4.855288, -12.364996],
    "p2":[46.229076, 8.523391, 12.463388],
    "p3":[46.229076, 8.523391, -12.364996]
    },
    {
    "p1":[47.620399, 4.855288, 12.463388],
    "p2":[47.620399, 4.855288, -12.364996],
    "p3":[47.620399, 8.523391, -12.364996]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[47.620399, 4.855288, 12.463388],
    "p2":[47.620399, 8.523391, -12.364996],
    "p3":[47.620399, 8.523391, 12.463388]
    },
    {
    "p1":[45.246548, 0.049879, 15.821493],
    "p2":[45.246548, 0.049879, 12.468693],
    "p3":[48.599346, 0.049879, 12.468693]
    },
    {
    "p1":[45.246548, 0.049879, 15.821493],
    "p2":[48.599346, 0.049879, 12.468693],
    "p3":[48.599346, 0.049879, 15.821493]
    },
    {
    "p1":[45.246548, 0.049879, 15.821493],
    "p2":[48.599346, 0.049879, 15.821493],
    "p3":[48.599346, 37.944706, 15.821493]
    },
    {
    "p1":[45.246548, 0.049879, 15.821493],
    "p2":[48.599346, 37.944706, 15.821493],
    "p3":[45.246548, 37.944706, 15.821493]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[46.934267, 18.997292500000007, 0.04924700000000731],
    "raio":24.710657976821654
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[48.599346, 0.049879, 15.821493],
    "p2":[48.599346, 0.049879, 12.468693],
    "p3":[48.599346, 37.944706, 12.468693]
    },
    {
    "p1":[48.599346, 0.049879, 15.821493],
    "p2":[48.599346, 37.944706, 12.468693],
    "p3":[48.599346, 37.944706, 15.821493]
    },
    {
    "p1":[48.599346, 0.049879, 12.468693],
    "p2":[45.246548, 0.049879, 12.468693],
    "p3":[45.246548, 37.944706, 12.468693]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[48.599346, 0.049879, 12.468693],
    "p2":[45.246548, 37.944706, 12.468693],
    "p3":[48.599346, 37.944706, 12.468693]
    },
    {
    "p1":[45.246548, 0.049879, 12.468693],
    "p2":[45.246548, 0.049879, 15.821493],
    "p3":[45.246548, 37.944706, 15.821493]
    },
    {
    "p1":[45.246548, 0.049879, 12.468693],
    "p2":[45.246548, 37.944706, 15.821493],
    "p3":[45.246548, 37.944706, 12.468693]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[45.269184, 0.049879, -12.370199],
    "p2":[45.269184, 0.049879, -15.722999],
    "p3":[48.621986, 0.049879, -15.722999]
    },
    {
    "p1":[45.269184, 0.049879, -12.370199],
    "p2":[48.621986, 0.049879, -15.722999],
    "p3":[48.621986, 0.049879, -12.370199]
    },
    {
    "p1":[45.269184, 0.049879, -12.370199],
    "p2":[48.621986, 0.049879, -12.370199],
    "p3":[48.621986, 37.93652, -12.370199]
    },
    {
    "p1":[45.269184, 0.049879, -12.370199],
    "p2":[48.621986, 37.93652, -12.370199],
    "p3":[45.269184, 37.93652, -12.370199]
    },
    {
    "p1":[48.621986, 0.049879, -12.370199],
    "p2":[48.621986, 0.049879, -15.722999],
    "p3":[48.621986, 37.93652, -15.722999]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[-0.05436149999999834, 18.99319950000001, 0.05869949999999898],
    "raio":54.5646241172005
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[48.621986, 0.049879, -12.370199],
    "p2":[48.621986, 37.93652, -15.722999],
    "p3":[48.621986, 37.93652, -12.370199]
    },
    {
    "p1":[48.621986, 0.049879, -15.722999],
    "p2":[45.269184, 0.049879, -15.722999],
    "p3":[45.269184, 37.93652, -15.722999]
    },
    {
    "p1":[48.621986, 0.049879, -15.722999],
    "p2":[45.269184, 37.93652, -15.722999],
    "p3":[48.621986, 37.93652, -15.722999]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[45.269184, 0.049879, -15.722999],
    "p2":[45.269184, 0.049879, -12.370199],
    "p3":[45.269184, 37.93652, -12.370199]
    },
    {
    "p1":[45.269184, 0.049879, -15.722999],
    "p2":[45.269184, 37.93652, -12.370199],
    "p3":[45.269184, 37.93652, -15.722999]
    },
    {
    "p1":[-48.730709, 0.049881, 15.840398],
    "p2":[-48.730709, 0.049881, 12.487598],
    "p3":[-45.377907, 0.049881, 12.487598]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-48.730709, 0.049881, 15.840398],
    "p2":[-45.377907, 0.049881, 12.487598],
    "p3":[-45.377907, 0.049881, 15.840398]
    },
    {
    "p1":[-48.730709, 0.049881, 15.840398],
    "p2":[-45.377907, 0.049881, 15.840398],
    "p3":[-45.377907, 37.93652, 15.840398]
    },
    {
    "p1":[-48.730709, 0.049881, 15.840398],
    "p2":[-45.377907, 37.93652, 15.840398],
    "p3":[-48.730709, 37.93652, 15.840398]
    },
    {
    "p1":[-45.377907, 0.049881, 15.840398],
    "p2":[-45.377907, 0.049881, 12.487598],
    "p3":[-45.377907, 37.93652, 12.487598]
    },
    {
    "p1":[-45.377907, 0.049881, 15.840398],
    "p2":[-45.377907, 37.93652, 12.487598],
    "p3":[-45.377907, 37.93652, 15.840398]
    }
    ]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[-9.769962616701378E-15, 23.63652509701922, -2.3092638912203256E-14],
    "raio":56.408598530725236
    },
    "componentes": [
    {
    "fronteira":
    {
    "centro":[-47.05438400000001, 18.9932005, 0.06585696173288506],
    "raio":24.70820843672561
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[-45.377907, 0.049881, 12.487598],
    "p2":[-48.730709, 0.049881, 12.487598],
    "p3":[-48.730709, 37.93652, 12.487598]
    },
    {
    "p1":[-45.377907, 0.049881, 12.487598],
    "p2":[-48.730709, 37.93652, 12.487598],
    "p3":[-45.377907, 37.93652, 12.487598]
    },
    {
    "p1":[-48.730709, 0.049881, 12.487598],
    "p2":[-48.730709, 0.049881, 15.840398],
    "p3":[-48.730709, 37.93652, 15.840398]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-48.730709, 0.049881, 12.487598],
    "p2":[-48.730709, 37.93652, 15.840398],
    "p3":[-48.730709, 37.93652, 12.487598]
    },
    {
    "p1":[-48.730785, 0.049881, -12.355877],
    "p2":[-48.730785, 0.049881, -15.708676],
    "p3":[-45.377983, 0.049881, -15.708676]
    },
    {
    "p1":[-48.730785, 0.049881, -12.355877],
    "p2":[-45.377983, 0.049881, -15.708676],
    "p3":[-45.377983, 0.049881, -12.355877]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-48.730785, 0.049881, -12.355877],
    "p2":[-45.377983, 0.049881, -12.355877],
    "p3":[-45.377983, 37.93652, -12.355877]
    },
    {
    "p1":[-48.730785, 0.049881, -12.355877],
    "p2":[-45.377983, 37.93652, -12.355877],
    "p3":[-48.730785, 37.93652, -12.355877]
    },
    {
    "p1":[-45.377983, 0.049881, -12.355877],
    "p2":[-45.377983, 0.049881, -15.708676],
    "p3":[-45.377983, 37.93652, -15.708676]
    },
    {
    "p1":[-45.377983, 0.049881, -12.355877],
    "p2":[-45.377983, 37.93652, -15.708676],
    "p3":[-45.377983, 37.93652, -12.355877]
    },
    {
    "p1":[-45.377983, 0.049881, -15.708676],
    "p2":[-48.730785, 0.049881, -15.708676],
    "p3":[-48.730785, 37.93652, -15.708676]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[1.7763568394002505E-15, 23.68793497988016, -1.7763568394002505E-14],
    "raio":56.393346277242046
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[-45.377983, 0.049881, -15.708676],
    "p2":[-48.730785, 37.93652, -15.708676],
    "p3":[-45.377983, 37.93652, -15.708676]
    },
    {
    "p1":[-48.730785, 0.049881, -15.708676],
    "p2":[-48.730785, 0.049881, -12.355877],
    "p3":[-48.730785, 37.93652, -12.355877]
    },
    {
    "p1":[-48.730785, 0.049881, -15.708676],
    "p2":[-48.730785, 37.93652, -12.355877],
    "p3":[-48.730785, 37.93652, -15.708676]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-50.806732, 37.93652, 17.881598],
    "p2":[-50.806732, 37.93652, -17.881598],
    "p3":[50.806732, 37.93652, -17.881598]
    },
    {
    "p1":[-50.806732, 37.93652, 17.881598],
    "p2":[50.806732, 37.93652, -17.881598],
    "p3":[50.806732, 37.93652, 17.881598]
    },
    {
    "p1":[-50.806732, 40.395237, 17.881598],
    "p2":[50.806732, 40.395237, 17.881598],
    "p3":[50.806732, 40.395237, -17.881598]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-50.806732, 40.395237, 17.881598],
    "p2":[50.806732, 40.395237, -17.881598],
    "p3":[-50.806732, 40.395237, -17.881598]
    },
    {
    "p1":[-50.806732, 37.93652, 17.881598],
    "p2":[50.806732, 37.93652, 17.881598],
    "p3":[50.806732, 40.395237, 17.881598]
    },
    {
    "p1":[-50.806732, 37.93652, 17.881598],
    "p2":[50.806732, 40.395237, 17.881598],
    "p3":[-50.806732, 40.395237, 17.881598]
    },
    {
    "p1":[50.806732, 37.93652, 17.881598],
    "p2":[50.806732, 37.93652, -17.881598],
    "p3":[50.806732, 40.395237, -17.881598]
    },
    {
    "p1":[50.806732, 37.93652, 17.881598],
    "p2":[50.806732, 40.395237, -17.881598],
    "p3":[50.806732, 40.395237, 17.881598]
    }
    ]
    }
    ]
    },
    {
    "fronteira":
    {
    "centro":[-0.03596099999999838, 33.319881808540934, -0.1021754817132152],
    "raio":54.32446914293152
    },
    "componentes": [
    {
    "componentes": [
    {
    "p1":[50.806732, 37.93652, -17.881598],
    "p2":[-50.806732, 37.93652, -17.881598],
    "p3":[-50.806732, 40.395237, -17.881598]
    },
    {
    "p1":[50.806732, 37.93652, -17.881598],
    "p2":[-50.806732, 40.395237, -17.881598],
    "p3":[50.806732, 40.395237, -17.881598]
    },
    {
    "p1":[-50.806732, 37.93652, -17.881598],
    "p2":[-50.806732, 37.93652, 17.881598],
    "p3":[-50.806732, 40.395237, 17.881598]
    },
    {
    "p1":[-50.806732, 37.93652, -17.881598],
    "p2":[-50.806732, 40.395237, 17.881598],
    "p3":[-50.806732, 40.395237, -17.881598]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-46.297947, 4.855288, 0.760088],
    "p2":[-46.297947, 4.855288, -0.631244],
    "p3":[46.226025, 4.855288, -0.631244]
    },
    {
    "p1":[-46.297947, 4.855288, 0.760088],
    "p2":[46.226025, 4.855288, -0.631244],
    "p3":[46.226025, 4.855288, 0.760088]
    },
    {
    "p1":[-46.297947, 8.523391, 0.760088],
    "p2":[46.226025, 8.523391, 0.760088],
    "p3":[46.226025, 8.523391, -0.631244]
    },
    {
    "p1":[-46.297947, 8.523391, 0.760088],
    "p2":[46.226025, 8.523391, -0.631244],
    "p3":[-46.297947, 8.523391, -0.631244]
    }
    ]
    },
    {
    "componentes": [
    {
    "p1":[-46.297947, 4.855288, 0.760088],
    "p2":[46.226025, 4.855288, 0.760088],
    "p3":[46.226025, 8.523391, 0.760088]
    },
    {
    "p1":[-46.297947, 4.855288, 0.760088],
    "p2":[46.226025, 8.523391, 0.760088],
    "p3":[-46.297947, 8.523391, 0.760088]
    },
    {
    "p1":[46.226025, 4.855288, -0.631244],
    "p2":[-46.297947, 4.855288, -0.631244],
    "p3":[-46.297947, 8.523391, -0.631244]
    },
    {
    "p1":[46.226025, 4.855288, -0.631244],
    "p2":[-46.297947, 8.523391, -0.631244],
    "p3":[46.226025, 8.523391, -0.631244]
    }
    ]
    }
    ]
    }
    ]
    }
    ]
    }
  );