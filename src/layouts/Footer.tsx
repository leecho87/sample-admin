import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

const Wrapper = styled.footer`
    position:relative;
`;

const Footer = () => {
    return (
        <Wrapper>
            <Grid container>
                <Grid>이용약관</Grid>
                <Grid>개인정보처리방침</Grid>
            </Grid>
            <Typography>사업자등록번호 122-87-00053 통신판매업신고번호 제2019-서울강남-01705호 ㈜골프존 대표이사 박강수, 최덕형</Typography>
            <Typography>Copyright ⓒ GOLFZON. All rights reserved</Typography>
        </Wrapper>
    )
}

export default Footer;