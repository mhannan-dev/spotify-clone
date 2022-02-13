import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import rows from "../Body/rowsData";
import "./songs.css";

function SongsRow() {
    return (
        <div className="songsRows">
            <h2>Track List</h2>
            <Paper className="container">
                <Table>
                    <TableHead>
                        <TableRow >
                            <TableCell>TRACK TITLE</TableCell>
                            <TableCell>ALBUM</TableCell>
                            <TableCell>DATE ADDED</TableCell>
                            <TableCell>DURATION</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ id, title, album, date_added, duration }) => (
                            <TableRow key={id}>
                                <TableCell component="th" scope="row">
                                    {title}
                                </TableCell>
                                <TableCell>{album}</TableCell>
                                <TableCell>{date_added}</TableCell>
                                <TableCell>{duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default SongsRow