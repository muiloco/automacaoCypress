class LoginElements {
    botaoLogin = () => {return '.btn-link'}
    botaoNaoConseguiuEntrar = () => {return '.bottom-form-link > :nth-child(1) > .forgotLink'}
    botaoCriarConta = () => {return '.layout-twothirds-center > .bottom-form-link > :nth-child(2)'}
    botaoGoogle = () => {return '#googleButton > .label'}
    botaoMicrosoft = () => {return '#msftButton > .label'}
    botaoApple = () => {return '#signInWithAppleButton > .label'}
    campoLogin = () => {return '#user'}
    campoSenha = () => {return '#password'}
    botaoFazerLogin = () => {return '#login'}
    mensagemTexto = () => {return '.boards-page-board-section-header-name'}
}

export default LoginElements