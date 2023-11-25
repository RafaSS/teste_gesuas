<script>
import { onMounted } from "vue";
import {mask} from 'vue-the-mask'
import { Modal } from "flowbite";
export default {
  directives: {mask},
  data() {
    return {
      nome: "",
      dataNascimento: "",
      sexoBiologico: "",
      corRaca: "",
      rg: "",
      cpf: "",
      bairro: "",
      endereco: "",
    };
  },
  computed: {
    disableButton() {
      return (
        !this.nome ||
        !this.dataNascimento ||
        !this.sexoBiologico ||
        !this.corRaca ||
        (!this.rg && !this.cpf) ||
        !this.bairro ||
        !this.endereco
      );
    },
  },
};
onMounted(() => {
  const $buttonElement = document.querySelector("#button");
  const $modalElement = document.querySelector("#modal");
  const $closeButton = document.querySelector("#closeButton");

  const modalOptions = {
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  };

  if ($modalElement) {
    const modal = new Modal($modalElement, modalOptions);
    $buttonElement.addEventListener("click", () => modal.toggle());
    $closeButton.addEventListener("click", () => modal.hide());

    // programmatically show
    // modal.show();
  }
});
</script>
<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 rounded-lg dark:border-gray-700">
      <form>
        <h1 class="mb-9 text-2xl font-bold text-gray-900 dark:text-white">
          Cadastro
        </h1>
        <div>
          <label
            type="password"
            id="password"
            class="text-white mb-9 text-lg font-semibold rounded-lg block w-full bg-testes-orange text-white border-transparent"
            placeholder=""
          >
            Identificação da pessoa
          </label>
          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >Nome</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite o nome completo"
            v-model="nome"
            required
          />
          <label
            for="first_name"
            class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
            >Preenchiemento obrigatório</label
          >
          <label
            for="first_name"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >Nome Social</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 mb-6 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite o nome social"
          />
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="company"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Data de Nascimento</label
            >
            <input
              type="date"
              id="company"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Flowbite"
              v-model="dataNascimento"
              required
            />
            <label
              for="first_name"
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchiemento obrigatório</label
            >
          </div>

          <div>
            <label
              for="sexo_biologico"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Sexo biológico</label
            >
            <select
              type="email"
              id="email"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              v-model="sexoBiologico"
              required
            >
              <option value="" disabled selected>Selecione</option>
              <option value="mulher">Mulher</option>
              <option value="homem">Homem</option>
            </select>
            <label
              for="first_name"
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchiemento obrigatório</label
            >
          </div>

          <div>
            <label
              for="phone"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Gênero</label
            >
            <div class="grid gap-0 mb-2 md:grid-cols-2">
              <div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Mulher Cisgênero ⓘ</label
                  >
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-5"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-5"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Mulher transgênero ⓘ</label
                  >
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-6"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-6"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Travesti ⓘ</label
                  >
                </div>
              </div>
              <div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Homem cisgênero ⓘ</label
                  >
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-3"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-3"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Homem transgênero ⓘ</label
                  >
                </div>
                <div class="flex items-center mb-4">
                  <input
                    id="default-radio-4"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-4"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Não binário ⓘ</label
                  >
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              for="phone"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >A pessoa se considera parte do público LGBTQIA+</label
            >
            <div>
              <div class="flex gap-0 mb-2 md:grid-cols-2">
                <div class="flex items-center mr-8 mb-4">
                  <input
                    id="default-radio-7"
                    type="radio"
                    value=""
                    name="default-radio-2"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-7"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Sim</label
                  >
                </div>
                <div class="flex items-center mb-4">
                  <input
                    checked
                    id="default-radio-8"
                    type="radio"
                    value=""
                    name="default-radio-2"
                    class="w-5 mr-2 h-5 text-blue-600 bg-white-100 border-black border-2 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-radio-8"
                    class="ms-2 text-m font-normal text-gray-900 dark:text-gray-300"
                    >Não</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-6 w-1/2">
            <label
              for="cor_raca"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Cor/raça</label
            >
            <select
              type="select"
              id="cor_raca"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              v-model="corRaca"
              required
            >
              <option value="" disabled selected>Selecione</option>
              <option value="branco">Branco</option>
              <option value="preto">Preto</option>
              <option value="pardo">Pardo</option>
            </select>
            <label
              for="RG"
              class="block mb-6 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchimento obrigatório</label
            >
          </div>
        </div>

        <div class="mb-6">
          <label
            type="password"
            id="password"
            class="text-white text-lg font-semibold rounded-lg block w-full bg-testes-orange text-white border-transparent"
            placeholder=""
            required
          >
            Documentos
          </label>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="mb-6">
            <label
              for="RG"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >RG</label
            >
            <input
              type="text"
              id="RG"
              v-mask="'####-##'"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="00000000000"
              v-model="rg"
              required
            />
            <label
              for="RG"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchimento obrigatório de RG ou CPF</label
            >
          </div>
          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >CPF</label
            >
            <input
              type="text"
              id="confirm_password"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="000.000.000-00"
              v-mask="['###.###.###-##', '##.###.###/####-##']"
              v-model="cpf"
              required
            />
            <label
              for="RG"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchimento obrigatório de RG ou CPF</label
            >
          </div>
        </div>
        <div class="mb-6">
          <label
            type="password"
            id="password"
            class="text-white text-lg font-semibold rounded-lg block w-full bg-testes-orange text-white border-transparent"
            placeholder=""
          >
            Local de Residência
          </label>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="mb-6">
            <label
              for="bairro"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Bairro</label
            >
            <input
              type="text"
              id="bairro"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite o bairro"
              v-model="bairro"
              required
            />
            <label
              for="RG"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchimento obrigatório</label
            >
          </div>
          <div class="mb-6">
            <label
              for="endereço"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Endereço</label
            >

            <input
              type="text"
              id="confirm_password"
              class="bg-gray-50 mb-1 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Selecione o endereço"
              v-model="endereco"
              required
            />
            <label
              for="RG"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Preenchimento obrigatório</label
            >
          </div>
          <div class="mb-6">
            <label
              for="numero"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Número</label
            >
            <input
              type="text"
              id="CPF"
              class="bg-gray-50 mb-6 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite o número"
            />
          </div>
          <div class="mb-6">
            <label
              for="complento"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Complemento</label
            >
            <input
              type="text"
              id="confirm_password"
              class="bg-gray-50 mb-6 border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ex: apartamento 22"
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            type="password"
            id="password"
            class="text-white text-lg font-semibold rounded-lg block w-full bg-testes-orange text-white border-transparent"
            placeholder=""
          >
            Informações de contato
          </label>
        </div>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="mb-6">
            <label
              for="celular"
             
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Celular</label
            >
            <input
              type="email"
              id="email"
              v-mask="['(##) ####-####', '(##) #####-####']"
              class="bg-gray-50 mb-6 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="(00)00000-0000"
            />
          </div>
          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >E-mail</label
            >
            <input
              type="text"
              id="confirm_password"
              class="bg-gray-50 mb-6 border border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite o e-mail"
            />
          </div>
        </div>

        <div>
          <button
            id="button"
            type="button"
            :disabled="disableButton"
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            class="disabled:hover:bg-red-600 float-right ml-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            disabled="disableButton"
          >
            Cadastrar
          </button>

          <button
            id="button"
            type="button"
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            class="float-right ml-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-blue-900 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancelar
          </button>
        </div>
            <!-- Main modal -->
      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full ">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600"
            >
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              <h1>Cadastro realizado com sucesso!</h1>
            </div>
            <!-- Modal footer -->
            <div
              class="flex  object-center  p-4 md:p-5  border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                data-modal-hide="default-modal"
                type="submit"
                class=" float-right object-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Realizar novo cadastro
              </button>

            </div>
          </div>
        </div>
      </div>
      </form>

  
    </div>
  </div>
</template>
