import './Hero.scss'

function Hero() {
  return (
    <section className="section-hero">
      <h1 className="section-hero-title">Olá! <br /> Boas-vindas ao meu hub de projetos.</h1>

      <a className="section-hero-more-button" href="#projects">
        <img src="./src/assets/icons/down-arrow.svg" alt="Botão para mover para a próxima seção." />
      </a>
    </section>
  );
};

export default Hero