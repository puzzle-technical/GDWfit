import moment from 'moment'
import 'moment/locale/pt-br'
moment.locale('pt-br')

const today = '2021-06-11'

const atividades = [
  {
    atividade: 'Corrida',
    tempo: '20min',
    data: today
  },
  {
    atividade: '20 abdominais',
    tempo: '15min',
    data: today
  },
  {
    atividade: 'Caminhada 10km',
    tempo: '45min',
    data: today
  },
  {
    atividade: 'Corrida',
    tempo: '20min',
    data: '2021-06-10'
  },
  {
    atividade: '20 abdominais',
    tempo: '15min',
    data: '2021-06-10'
  },
  {
    atividade: 'Caminhada 10km',
    tempo: '45min',
    data: '2021-06-10'
  },
  {
    atividade: 'Corrida',
    tempo: '20min',
    data: '2021-06-09'
  },
  {
    atividade: '20 abdominais',
    tempo: '15min',
    data: '2021-06-09'
  },
  {
    atividade: 'Caminhada 10km',
    tempo: '45min',
    data: '2021-06-08'
  },
  {
    atividade: 'Caminhada 10km',
    tempo: '45min',
    data: '2021-06-07'
  },
  {
    atividade: 'Corrida',
    tempo: '20min',
    data: '2021-06-07'
  },
  {
    atividade: '20 abdominais',
    tempo: '15min',
    data: '2021-06-07'
  },
  {
    atividade: 'Caminhada 10km',
    tempo: '45min',
    data: '2021-06-07'
  },
]

export default {
  getAtividades (date) {
    if (!date) return []
    return atividades.filter(atv => moment(atv.data).isSame(date, 'day'))
  }
}