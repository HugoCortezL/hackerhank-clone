import {Container, StickContainer,OptionsContainer, ButtonContainer} from './styles'
import './styles.css'
export default function Header() {

    (function () {
        var menu = document.getElementById('menu'); // colocar em cache
        window.addEventListener('scroll', function () {
            if (window.scrollY > 30) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
            else menu.classList.remove('menuFixo');
        });
    })();

    return (
        <Container>
            <header id="menu">
            <StickContainer>
                <a href="#">
                    <img src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" alt="" />
                </a>
                <OptionsContainer>
                    <ButtonContainer border='false'>
                        Login
                    </ButtonContainer>
                    <ButtonContainer border='true'>
                        Sign Up
                    </ButtonContainer>
                
                </OptionsContainer>
            </StickContainer>
            </header>
        </Container>
    )
}
