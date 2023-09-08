import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Ux e Design",
    "Mobile",
    "Inovação e gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do trabalhador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
        <Botao texto="Criar Card" />
      </form>
    </section>
  );
};
export default Formulario;
