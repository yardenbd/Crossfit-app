import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableInput from "./TableInput";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
  
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export default function WodTable(props) {
      const table = <> <h1 className="h5" >Last WODS</h1>
      <TableContainer component={Paper} >
        <Table aria-label="customized table">
          <TableHead>
         
            <TableRow>
         
              <StyledTableCell> Date</StyledTableCell>
              <StyledTableCell align="right">Name&nbsp;</StyledTableCell>
              <StyledTableCell align="right">How&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Exercises&nbsp;</StyledTableCell>
              <StyledTableCell align="right">Last time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {props.wodArray.map((wod) => (
              <TableInput
              key={wod.title}
                name={wod.title}
                how={wod.how}
                exercises={wod.exercises}
                lastTime={wod.id}
              />
            ))} */}
          </TableBody>
        </Table>
      </TableContainer></>
  return (
    <>
         {table}
    </>
  );
}
