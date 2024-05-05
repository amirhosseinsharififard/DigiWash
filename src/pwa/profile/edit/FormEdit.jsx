import { Grid, TextField, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const FormEdit = ({name, dataName}) => {
    return (
        <>
             <Grid item display='flex' xs={12} sm={12} md={12} lg={12}  >
            <Typography  fontFamily='Vazir' fontSize='14px'>
              {name}
            </Typography>
          </Grid>
          <Grid

            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            borderRadius='10px'
            overflow='hidden'
            textAlign='center'
            m='.5rem  0 2rem 0'
            
            >

            <TextField
              id='outlined-basic'
              variant='outlined'
              required
              fullWidth
value={dataName}
              sx={{
                bgcolor: "rgb(240, 244, 244)",
                "& fieldset": { border: "none", }
              }}
              inputProps={{ style: { textAlign: 'center' }}}
            />
          </Grid>   
        </>
    );
}

export default FormEdit;
