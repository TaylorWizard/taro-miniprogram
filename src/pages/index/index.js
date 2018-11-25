import Taro, {Component} from '@tarojs/taro'
import {Text, Button, View, Swiper, SwiperItem, Image} from '@tarojs/components'
import {connect} from '@tarojs/redux'

import {add, minus, asyncAdd} from '../../actions/counter'
import coco_1 from './coco-1.png';
import coco_2 from './coco-2.png';
import order from './img/order.svg';
import mine from './img/mine.svg';

import './index.scss'


@connect(({counter}) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    backgroundColor: '#eeeeee'
  };

  constructor() {
    super();
    this.swiperHandler = this.swiperHandler.bind(this);
    this.swiperChange = this.swiperChange.bind(this);
    this.state = {
      current: 0,
      swiperIndicator: [0, 1]
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  swiperHandler(e) {
    // console.log('e:',e);
    this.setState({
      current: e.target.current,
    })
  }

  swiperChange(e) {
    console.log('handleChange: ', e.target.current);
  }

  render() {
    return (
      <View className='index'>
        <View className='swiper-view'>
          <Swiper
            className='swiper'
            indicatorColor='#999'
            indicatorActiveColor='#ff8547'
            circular
            // indicatorDots
            autoplay
            onAnimationfinish={this.swiperHandler}
            onChange={this.swiperChange}
          >
            <SwiperItem className='swiper-item'>
              <Image
                src={coco_1}
              />
            </SwiperItem>
            <SwiperItem className='swiper-item'>
              <Image
                src={coco_2}
              />
            </SwiperItem>
          </Swiper>
        </View>
        <View className='swiper-ratio'>
          {this.state.swiperIndicator.map((value, index) => (
            <View
              key={index}
              className={this.state.current === value ? 'checked' : ''}
            />
          ))}
        </View>
        <View className='operation'>
          <Button
            className='self-order'
            // hoverClass='button-hover'
            size='default'
            plain
          >
            自助点单
          </Button>
          <View className='operation-items'>
            <View className='item left'>
              <Image
                src={order}
              />
              <Text>订单</Text>
            </View>
            <View className='splinter' />
            <View className='item right'>
              <Image
                src={mine}
              />
              <Text>我的</Text>
            </View>
          </View>
        </View>
        <View
          className='other'
        >
          <View
            className='item-1 gift'
          />
          <View
            className='item-2 flash-sale'
          />
          <View
            className='item-3 coco-cinema'
          />
          <View
            className='item-4 pocket'
          />
        </View>
      </View>
    )
  }
}

export default Index
