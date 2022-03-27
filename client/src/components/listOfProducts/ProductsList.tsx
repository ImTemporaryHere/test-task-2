import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import {useEffect} from "react";
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};









export default function BasicTable() {

  const {products} = useTypedSelector(state=>state.products)
  const {fetchProducts} = useAction()

  const [openModalAddProduct, setOpenModalAddProduct] = React.useState(false);
  const handleOpen = () => setOpenModalAddProduct(true);
  const handleClose = () => setOpenModalAddProduct(false);



  useEffect(()=>{fetchProducts()},[])





  return (
    <div>


      <Modal
        open={openModalAddProduct}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          <Grid container justifyContent={'center'} style={{gap: '20px'}}>
            <Grid xs={12} item container justifyContent={'center'}>
              <TextField label={'name'} />
            </Grid>

            <Grid xs={12} item container justifyContent={'center'}>
              <TextField label={'picture link'} />
            </Grid>

            <Grid xs={12} item container justifyContent={'center'}>
              <TextField label={'count'} />
            </Grid>


            <Grid xs={12} item container justifyContent={'center'}>
              <TextField label={'size'} />
            </Grid>


            <Grid xs={12} item container justifyContent={'center'}>
              <TextField label={'weight'} />
            </Grid>


          </Grid>









          <Grid style={{marginTop: '20px'}}  container justifyContent={'space-around'}>
            <Button onClick={()=>{
              console.log('adding')}}
                    variant="contained"
            >
              Confirm
            </Button>
            <Button onClick={handleClose} color={'error'} variant="contained">Cancel</Button>
          </Grid>
        </Box>
      </Modal>






      <Grid container justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant={'h3'} align={"left"}>
          Products
        </Typography>

        <Button onClick={handleOpen} variant="contained">Add Product</Button>
      </Grid>


      <TableContainer style={{maxHeight: '600px'}} component={Paper}>
        <Table stickyHeader={true} sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>id</TableCell>
              <TableCell>picture</TableCell>
              <TableCell>count</TableCell>
              <TableCell>size</TableCell>
              <TableCell>weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((productRow) => (
              <TableRow
                key={productRow._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {productRow.name}
                </TableCell>
                <TableCell>{productRow._id}</TableCell>
                <TableCell>
                  <img src={productRow.imageUrl} width={100} height={100} alt=""/>
                </TableCell>
                <TableCell>{productRow.count}</TableCell>
                <TableCell> width : {productRow.size.width} height : {productRow.size.height}</TableCell>
                <TableCell> weight : {productRow.weight}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}