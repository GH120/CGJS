export default triangulo = `
    struct Triangulo{
        vec3 p1;
        vec3 p2;
        vec3 p3;
        vec3 n;
    };

    bool pertence(Triangulo triangulo, vec3 pi){

        vec3 P1 = triangulo.p1;
        vec3 P2 = triangulo.p2;
        vec3 P3 = triangulo.p3;
        vec3 n  = triangulo.n;

        vec3 r1 = P2 - P1;
        vec3 r2 = P3 - P1;

        float razao = dot(cross(r1, r2), n);
    
        float c1 = dot(cross(P3 - pi, P1 - pi), n) / razao;
        float c2 = dot(cross(P1 - pi, P2 - pi), n) / razao;
        float c3 = dot(cross(P2 - pi, P3 - pi), n) / razao;
    
        if (min(min(c1, c2), c3) < 0.0) return false;
        if (max(max(c1, c2), c3) > 1.0) return false;

        return (c1+c2 <= 1.0);

        // return true;
    }

    Ponto colisao(Triangulo triangulo, vec3 p0, vec3 dr){

        vec3 P1 = triangulo.p1;
        vec3 P2 = triangulo.p2;
        vec3 P3 = triangulo.p3;

        vec3 n  = normalize(cross((P2-P1), (P3-P1)));

        triangulo.n = n;

        float denominador = dot(n,dr);

        float tint = dot(P1 - p0, n) / denominador;

        vec3 pi = p0 + dr * tint;

        tint = (float(pertence(triangulo, pi))*2.0 - 1.0) * (float(bool(max(0.0, tint)))*1024.0 - 1023.0) * tint;

        return Ponto(pi, n, tint);
        
    }
`;