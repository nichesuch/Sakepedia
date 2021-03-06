import React, { PropTypes } from 'react'
// css
import sheetsClasses from '../../public/stylesheets/scss/sheets.scss'
import classes from '../../public/stylesheets/scss/complete.scss'
// material-ui
import Dialog from 'material-ui/Dialog'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'

class Complete extends React.Component {
  constructor(props) {
    super(props)
    this.prefectures = [
      '北海道' , '青森県' , '岩手県' , '宮城県' , '秋田県' , '山形県' , '福島県' , '茨城県' , '栃木県' , '群馬県' , '埼玉県' , '千葉県' , '東京都' , '神奈川県' , '新潟県' , '富山県' , '石川県' , '福井県' , '山梨県' , '長野県' , '岐阜県' , '静岡県' , '愛知県' , '三重県' , '滋賀県' , '京都府' , '大阪府' , '兵庫県' , '奈良県' , '和歌山県' , '鳥取県' , '島根県' , '岡山県' , '広島県' , '山口県' , '徳島県' , '香川県' , '愛媛県' , '高知県' , '福岡県' , '佐賀県' , '長崎県' , '熊本県' , '大分県' , '宮崎県' , '鹿児島県' , '沖縄県'
    ]
    this.trophy = this.trophy.bind(this)
    this.completeNum = this.completeNum.bind(this)
    this.getAllBreweryNames = this.getAllBreweryNames.bind(this)
    this.percent = this.percent.bind(this)
    // for modal
    this.state = {
      open: false,
      selectedPref: '',
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  trophy( pref, allBreweryNames ) {
    const styles = {
      gold: {
        color: '#C98910',
      },
      silver: {
        color: '#A8A8A8',
      },
      bronze: {
        color: '#965A38',
      },
    }
    if( 90 <= this.percent( pref, allBreweryNames ) ){
      return <i className='fa fa-trophy' style={styles.gold}></i>
    } else if ( 50 <= this.percent( pref, allBreweryNames ) ) {
      return <i className="fa fa-trophy" style={styles.silver}></i>
    } else if ( 10 <= this.percent( pref, allBreweryNames ) ){
      return <i className="fa fa-trophy" style={styles.bronze}></i>
    } else {
      return <span>-</span>
    }
  }
  completeNum( pref, allBreweryNames ){
    return this.props.myBreweries.filter( brewery => {
      return allBreweryNames.includes( brewery )
    } ).length
  }
  getAllBreweryNames( pref ){
    return this.props.allBreweries.filter( breweryArray => {
      return breweryArray[2] === pref
    }).map( breweryArray => {
      return breweryArray[0]
    } )
  }
  percent( pref, allBreweryNames ){
    let percent = this.completeNum( pref, allBreweryNames ) / ( allBreweryNames.length ) * 100
    return Math.round( percent * 10 ) / 10
  }

  // for modal
  handleOpen(selectedPref) {
    this.setState({open: true, selectedPref})
  }
  handleClose() {
    this.setState({open: false})
  }

  render() {
    const styles = {
      button: {
        marginBottom: '1em',
      },
      table: {
        width: '100%',
      },
      link: {
        color: '#00bcd4',
        textDecolation: 'underline',
      },
      smallIcon: {
        color: '#757575',
        fontSize: 'small',
      }
    }
    if( this.props.allBreweries.length === 0 || this.props.myBreweries.length === 0 ){
      document.getElementById('loading').style.display = 'block'
      return <div>loading...</div>
    }
    document.getElementById('loading').style.display = 'none'
    return (
      <div>
        <p>蔵元の制覇率で、銘柄の種類や数は問いません。
        90%以上でゴールド、50%以上でシルバー、10%以上でブロンズです。</p>
        <a href="https://docs.google.com/spreadsheets/d/1ko_2HlIC-KtAp9aMJlrDD4MiIv81DKouhdPdo3BQDGY/edit?usp=sharing" target="_blank">
          <RaisedButton
            label="蔵元データを編集"
            labelPosition="before"
            primary={true}
            style={styles.button}
            icon={<FontIcon className="material-icons">cloud_upload</FontIcon>}
          />
        </a>
        <table className={sheetsClasses.table} style={styles.table}>
          <tr className={sheetsClasses.tr}>
            <th className={sheetsClasses.th}><i className="fa fa-trophy"></i></th>
            <th className={sheetsClasses.th}>都道府県</th>
            <th className={sheetsClasses.th}>蔵元数</th>
            <th className={sheetsClasses.th}>制覇率</th>
          </tr>
          { this.prefectures.map( pref => {
            let allBreweryNames = this.getAllBreweryNames( pref )
            return (
              <tr className={sheetsClasses.tr}>
                <td className={sheetsClasses.td}>{ this.trophy( pref, allBreweryNames ) }</td>
                <td className={sheetsClasses.td}><a style={styles.link} onClick={ () => this.handleOpen(pref) } >{pref} <FontIcon className="material-icons" style={styles.smallIcon}>launch</FontIcon></a></td>
                <td className={sheetsClasses.td}>{ this.completeNum( pref, allBreweryNames ) } / { allBreweryNames.length }</td>
                <td className={sheetsClasses.td}>{ this.percent( pref, allBreweryNames ) } %</td>
              </tr>
            )
          } ) }
        </table>
        <Dialog
          title="蔵元一覧"
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <ul>
            {
              this.getAllBreweryNames( this.state.selectedPref ).map( name => {
                let completed = ''
                if( this.props.myBreweries.includes(name) ){
                  completed = classes.completed
                }
                return (
                  <li className={completed}>{name}</li>
                )
              })
            }
          </ul>
        </Dialog>
      </div>
    )
  }
}

Complete.propTypes = {
  allBreweries: PropTypes.array.isRequired,
  myBreweries: PropTypes.array.isRequired,
}

export default Complete
