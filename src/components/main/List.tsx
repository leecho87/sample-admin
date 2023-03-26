import { Grid, Table, TableHead, TableBody, TableCell, Button, TableRow, Pagination } from "@mui/material";
import styled from "@emotion/styled";


const PagingRow = styled.div`
    text-align:center;
`

const Paging = styled(Pagination)`
    display:inline-block;
    margin:0 auto;
`;

const List = () => {
    return (
        <>
            <Grid container justifyContent="space-between">
                <Grid xs>
                    <strong>2건</strong>
                </Grid>
                <Grid xs sx={{ textAlign: "right"}}>
                    <Button>등록</Button>
                </Grid>
            </Grid>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">No</TableCell>
                        <TableCell align="center">골프장명</TableCell>
                        <TableCell align="center">지역</TableCell>
                        <TableCell align="center">아이디</TableCell>
                        <TableCell align="center">사용ERP</TableCell>
                        <TableCell align="center">서비스</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">2</TableCell>
                        <TableCell align="center">히든밸리</TableCell>
                        <TableCell align="center">충청</TableCell>
                        <TableCell align="center">abcde</TableCell>
                        <TableCell align="center">무노스</TableCell>
                        <TableCell align="center">G-Field</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <PagingRow>
                <Paging
                    siblingCount={10}
                    count={10}
                />
            </PagingRow>
        </>
    )
}

export default List;