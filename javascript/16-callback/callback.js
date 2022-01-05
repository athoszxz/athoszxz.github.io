function sortear() {
    var numbers = [];
    var i = 0;
    var min = 1, max = 60, p;

    //resetar a página HTML
    document.getElementById("tabela-pedidos").innerHTML = 
    `<tr>
        <th>Números</th>
    </tr>`;

    //set interval como loop
    const timer = setInterval(function() {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if(!p){
                ++i;
                if (i === 6) clearInterval(timer); 
                numbers.push(n);
                document.getElementById("tabela-pedidos").innerHTML +=  
                `<tr>
                    <td>${n}</td>
                </tr>`;
            }
        } while(p);
    }, 1000);
}
