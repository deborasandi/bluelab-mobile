import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Alert from '@material-ui/lab/Alert'

import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import CloseIcon from '@material-ui/icons/Close'

import '../styles.css'
import api from '../../../service/api';

const ZirconiaForm = () => {
  const title = 'Cadastrar Zircônia'

  const [blockTypes, setBlockTypes] = useState(['HT', 'SHT/ST', 'TT', '3D'])
  const [height, setHeight] = useState([10, 12, 14, 16, 18, 20, 22, 25, 30])
  const [color, setColor] = useState(['A1', 'A2', 'A3', 'A3,5', 'A4', 'B1', 'B2', 'B3',
    'B4', 'C1', 'C2', 'C3', 'C4', 'D2', 'D3', 'D4', 'Branco', 'BL1'])

  const [open, setOpen] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertTitle, setAlertTitle] = useState('')
  const [data, setData] = useState([])
  const [disabled, setDisabled] = useState(false)

  const [formData, setFormData] = useState({
    id: '',
    blockType: '',
    height: 0,
    color: '',
    factor: '',
    brand: '',
    lot: '',
    qtd: 1
  })

  useEffect(() => {
    api.get('zirconia').then(response => {
      setData(response.data)
    })
  }, [])

  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    const { name, value } = event.target

    if (name)
      setFormData({ ...formData, [name]: value })
  }

  function handleSave() {

    if (formData.id === '') { // novo registro
      for (let i = 0; i < formData.qtd; i++) {
        api.post('zirconia', {
          "blockType": formData.blockType,
          "height": formData.height,
          "color": formData.color,
          "factor": formData.factor,
          "brand": formData.brand,
          "lot": formData.lot
        }).then(response => {
          alertDialog('Bloco de zircônia cadastrado!')
        })
      }
    } else {
      api.put(`zirconia/${formData.id}`, {
        "blockType": formData.blockType,
        "height": formData.height,
        "color": formData.color,
        "factor": formData.factor,
        "brand": formData.brand,
        "lot": formData.lot
      }).then(response => {
        alertDialog('Dados atualizados!')
      })
    }

    handleClose()
  }

  function alertDialog(title: string) {
    api.get('zirconia').then(response => {
      setData(response.data)
    })

    setAlertTitle(title)
    setShowAlert(true)

    let timeoutID = setTimeout(() => {
      setShowAlert(false)
    }, 4000)
  }

  const handleClickOpen = (disableField: boolean) => {
    setDisabled(disableField)
    setOpen(true)
  }

  function handleClose() {
    setFormData({
      id: '',
      blockType: '',
      height: 0,
      color: '',
      factor: '',
      brand: '',
      lot: '',
      qtd: 1
    })

    setOpen(false);
  }

  const TableComponent = () => {
    const useStyles = makeStyles({
      button: {
        padding: 0,
      }
    })

    const classes = useStyles()

    const columns = [{
      label: 'blockType',
      value: 'Tipo de Bloco'
    }, {
      label: 'height',
      value: 'Altura'
    }, {
      label: 'color',
      value: 'Cor'
    }, {
      label: 'factor',
      value: 'Fator'
    }, {
      label: 'brand',
      value: 'Marca'
    }, {
      label: 'lot',
      value: 'Lote'
    }, {
      label: 'date',
      value: 'Data'
    }]

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    function handleDelete(row: any) {
      api.delete(`zirconia/${row.id}`).then(response => {
        alertDialog('Bloco de zircônia removido!')
      })
    }

    function openDialog(row: any) {
      setFormData({ ...row, qtd: 1 })
      handleClickOpen(true)
    }

    return (
      <>
        <Paper className="table">
          <TableContainer className="container">
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  {columns.map(col => <TableCell align="center">{col.value}</TableCell>)}
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                  return (
                    <TableRow key={row['id']}>
                      {columns.map(col => (
                        <TableCell align="center">{row[col.label]}</TableCell>
                      ))}
                      <TableCell align="center" className={classes.button}>
                        <IconButton aria-label="edit" onClick={() => openDialog(row)} className={classes.button}>
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDelete(row)} className={classes.button}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper >
      </>
    )
  }

  return (
    <div className="root">
      <Button variant="contained" color="secondary" onClick={() => handleClickOpen(false)}>
        <AddIcon fontSize="small" />
        {title}
      </Button>

      <TableComponent />

      {showAlert && (
        <div className="alerDialog">
          <Alert
            severity="success"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >{alertTitle}</Alert>
        </div>
      )}

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>

          <div className="modalForm">
            <FormControl variant="outlined" className="input">
              <InputLabel htmlFor="outlined-age-native-simple">Bloco</InputLabel>
              <Select
                native
                name='blockType'
                value={formData.blockType}
                onChange={handleChange}
                label="Bloco"
                required
              >
                <option aria-label="None" value="" />
                {blockTypes.map(b => <option value={b}>{b}</option>)}
              </Select>
            </FormControl>

            <FormControl variant="outlined" className="input">
              <InputLabel htmlFor="outlined-age-native-simple">Altura</InputLabel>
              <Select
                native
                name='height'
                value={formData.height}
                onChange={handleChange}
                label="Altura"
                type="number"
                required
              >
                <option aria-label="None" value="" />
                {height.map(b => <option value={b}>{b}</option>)}
              </Select>
            </FormControl>

            <FormControl variant="outlined" className="input">
              <InputLabel htmlFor="outlined-age-native-simple">Cor</InputLabel>
              <Select
                native
                name='color'
                value={formData.color}
                onChange={handleChange}
                label="Cor"
                required
              >
                <option aria-label="None" value="" />
                {color.map(b => <option value={b}>{b}</option>)}
              </Select>
            </FormControl>
          </div>
          <div className="modalForm">
            <TextField
              name='factor'
              value={formData.factor}
              label="Fator"
              variant="outlined"
              onChange={handleChange}
              className="input"
              required
            />

            <TextField
              name='lot'
              value={formData.lot}
              label="Lote"
              variant="outlined"
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="modalForm">
            <TextField
              name='brand'
              label="Marca"
              value={formData.brand}
              variant="outlined"
              onChange={handleChange}
              className="input"
              required
            />

            <TextField
              name='qtd'
              label="Quantidade"
              variant="outlined"
              onChange={handleChange}
              type="number"
              className="number"
              disabled={disabled}
              value={formData.qtd}
            />
          </div>

        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="secondary" onClick={handleSave}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ZirconiaForm