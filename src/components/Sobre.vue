<template>
  <div class="sobre" id="sobre">
    <br>
    <br>
    <br>
    <br>
    <h3>Inicialmente, O LembreSee era apenas uma idéia pra praticar.</h3>
    <h3>
      Acabei gostando e decidi transformá-lo no meu primeiro projeto pessoal.
      Criado Integralmente por mim, ele foi feito para funcionar como uma forma rápida e fácil de guardar pequenos lembretes.
      
    </h3>
    <br>
    <h3 >
      <strong> Embora simples, ele é um crud completo, podendo criar, ler, editar e deletar informações de um banco de dados funcional e persistente.</strong>
      (Bom, Mais ou menos, o heroku zera o banco de tempo em tempo.)
    </h3>
    <br>
    <br>

    <br><h1>Tecnologias Utilizadas</h1><br><br><br>
    <h3>Java e SpringBoot no back. (<a href="https://github.com/RamonRemo/Projeto1-LembreSee-back"> Codigo</a>, <a href="https://lembreseetestee.herokuapp.com"> API</a>)</h3>
    <h3>VueJS com um pouco de BootStrap no front. (<a href="https://github.com/RamonRemo/Projeto1-LembreSee-Front"> Aqui!</a>)</h3> 
    <h3>H2 no banco.(era um dos poucos que o heroku aceitava no modo gratuito haha)</h3>
    <br>
    <br>


    <br><h1>O quem vem por aí?</h1><br><br><br>
    <h3> É claro, esta é apenas a primeira versão e ainda tem muito o que melhorar, penso em aperfeiçoá-lo aos poucos, 
      enquanto melhoro minhas próprias habilidades como programador e eventualmente colocá-lo online. (Afinal, Neste momento ele roda apenas num modo de Visualização, para portfólio mesmo.)
    </h3>
    <h3>   
      Aqui, uma lista do que ainda pretendo fazer, Algumas coisas não fiz por falta de tempo outras por falta de conhecimento e outras por preguiça mesmo.
          Algumas tenho uma boa ideia de por onde começar e o que fazer, Outras não tenho a minima ideia de como fazer! Isso é legal e esses desafios me motivam. 
    </h3>
    <br>
    <ul>
      <li>[ ] Paleta de cores, pros post-it e pras fontes </li>
      <li>[ ] Criaçao e validação de login </li>
      <li>[ ] Validação de contas (google,facebook) </li>
      <li>[ ] Post-its redimensionavéis </li>
      <li>[ ] Post-its arrastavéis e reorganizavéis </li>
      <li>[ ] Melhorar as transições das animações </li>
      <li>[ ] Responsividade </li>
      <li>[ ] Versão Mobile (App) </li>
    </ul>


    <br><h1>Contato</h1>
    <a href="https://www.linkedin.com/in/ramon-alex-19690a113/"> <img src="https://image.flaticon.com/icons/png/512/38/38669.png" alt=""></a>
    <a href="https://github.com/RamonRemo"> <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" alt=""></a>
    <!-- <a href="https://www.linkedin.com/in/ramon-alex-19690a113/" class="fa fa-linkedin"></a> -->
    <!-- <a href="https://github.com/RamonRemo" class="fa fa-github" ></a> -->
    <br>
    <a> 
      <span>
        ramonalexf@gmail.com
      </span>
    </a>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        jos: ''
      }
    },
  }
</script>

<style>


.sobre{
  /* background-color:grey; */
  /* background-image: url('https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'); */
  /* background-image: url('https://images.pexels.com/photos/2524767/pexels-photo-2524767.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'); */
  /* background-image: url('https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  min-height: 750px;
  /* max-width: 100%; */
  /* height: 100%; */

  font-family: 'Abel', sans-serif !important;
  /* font-family: 'Amatic SC', cursive !important; */
  /* font-family: 'Roboto Slab', serif !important; */

  color:white;

}

img{
  height: 40px;
  margin-right: 10px;
  /* background-color: white; */
}

ul,li,h3{
  font-size: 24px;
  list-style-type: none;
  text-align: justify;
  /* justify-content: left;  */
  padding-left: 40px;
  padding-right: 20px; 
}

h1{
  font-size: 50px !important; 
}


</style>