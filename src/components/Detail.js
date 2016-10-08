import React, { PropTypes } from 'react'
import { Link } from 'react-router'
// material-ui
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
// css
import classes from '../../public/stylesheets/scss/detail.scss'
// components
import NewReview from './NewReview'
import Reviews from './Reviews'

class Detail extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tab: this.props.initialTab,
    }
  }

  changeTab( tab ) {
    this.setState({ tab })
  }

  render() {
    const styles = {
      contentContainer: {
        'margin': '1em 0',
      },
      tabItemContainer: {
        'backgroundColor': 'lightgray',
      },
      visible: {
        display: 'none',
      },
    }
    if( !this.props.isLogin ) {
      styles.visible.display = 'block'
    }
    const items = [
      'name',
      'type',
      'sakeYeast',
      'memo',
      'url',
      'sakeBrewery',
      'prefectures',
      'sakeRiceExceptForKojiMaking',
      'riceForMakingKoji',
      'starterCulture',
      'ricePolishiingRate',
      'alcoholContent',
      'sakeMeterValue',
      'acidity',
      'aminoAcidContent',
      'discription',
    ]
    let setAnchor = ( input ) => {
      if( /http/.test( input ) ){
        return <a href={input} target="_blank">{input}</a>
      }
      return input
    }
    return (
      <div>
        <div className={classes.header}>
          <img src={ this.props.sake.imageUrl } className={classes.image} />
          <div>
            <div><span className={classes.title}>{this.props.sake.name}</span>( {this.props.sake.type} )</div>
            <div>{this.props.sake.sakeBrewery} ( {this.props.sake.prefectures} )</div>
          </div>
        </div>

        <Tabs
          contentContainerStyle={styles.contentContainer}
          tabItemContainerStyle={styles.tabItemContainer}
          value={this.state.tab} >
          <Tab
             id="detail"
            icon={<FontIcon className="material-icons">details</FontIcon>}
            label="詳細"
            onClick={ () => { this.changeTab('detail') } }
            value="detail"
          >
            <table className={classes.table}>
                  { items.map( key => {
                    return(
                      <tr className={classes.tr}>
                        <th className={classes.th} width="25%">{ key }</th>
                        <td className={classes.td}>
                            { setAnchor( this.props.sake[key] ) }
                        </td>
                      </tr>
                    )
                  } ) }
            </table>
          </Tab>
          <Tab
            id="reviews"
            icon={<FontIcon className="material-icons">people</FontIcon>}
            label="レビュー"
            onClick={ () => { this.changeTab('reviews') } }
            value="reviews"
          >
          <Reviews reviews={this.props.sake.レビュー} />
          </Tab>
          <Tab
            id="createReview"
            icon={<FontIcon className="material-icons">chat_bubble_outline</FontIcon>}
            label="レビューする"
            onClick={ () => { this.changeTab('createReview') } }
            value="createReview"
          >
            <NewReview
              changeTab={this.changeTab.bind(this)}
              sake={this.props.sake}
              update={this.props.update}
              isLogin={this.props.isLogin}
             />
           <div style={styles.visible}>
             <p>ログインしてください。</p>
             <Link to={'/login'} query={{ sakeId: this.props.sake._id }}><RaisedButton label="ログイン" /></Link>
           </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

Detail.propTypes = {
  initialTab: PropTypes.string.isRequired,
  isLogin: PropTypes.bool.isRequired,
  sake: PropTypes.object.isRequired,
  update: PropTypes.func.isRequired,
}

export default Detail
