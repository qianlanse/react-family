import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

class Scroll extends Component {
    constructor(props) {
        super(props)
        this.scroll = null
    }
    componentDidMount() {
        setTimeout(() => {
            this._initScroll()
            window.addEventListener('resize', this._windowResize)
        }, 20)
    }
    _windowResize = () => {
        if (this.scroll && this.props.refresh === true) {
            setTimeout(() => {
                this.scroll.refresh()
            }, this.props.refreshDelay)
        }
    }
    _initScroll = () => {
        this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView)
        if (this.scrollView) {
            const { probeType, click, direction, onScroll, onScrollToEnd, onBeforeScroll } = this.props
            this.scroll = new BScroll(this.scrollView, {
                probeType,
                click,
                eventPassthrough: direction === DIRECTION_V ? DIRECTION_H : DIRECTION_V
            })
            // 监听页面滚动获取滚动数值
            if (onScroll) {
                this.scroll.on('scroll', val => {
                    onScroll(val)
                })
            }
            // 监听页面滚动是否到底部
            if (onScrollToEnd) {
                this.scroll.on('scrollEnd', () => {
                    if (this.scroll.y < (this.scroll.maxScrollY + 50)) {
                        onScrollToEnd()
                    }
                })
            }
            // 监听页面滚动开始前
            if (onBeforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    onBeforeScroll()
                })
            }
        } else {
            return
        }
    }
    componentDidUpdate() {
        if (this.scroll && this.props.refresh === true) {
            setTimeout(() => {
                this.scroll.refresh()
            }, this.props.refreshDelay)
        }
    }
    componentWillUnmount() {
        if (this.scroll) {
            this.scroll.off('scroll')
            this.scroll.destroy()
        }
        window.removeEventListener('resize', this._windowResize)
    }
    disable() {
        this.scroll && this.scroll.disable()
    }
    enable() {
        this.scroll && this.scroll.enable()
    }
    refresh() {
        this.scroll && this.scroll.refresh()
    }
    scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    }
    scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
    render() {
        return (
            <div ref="scrollView" className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

Scroll.defaultProps = {
    probeType: 3,
    click: true,
    refresh: true,
    onScroll: null,
    onScrollToEnd: null,
    onBeforeScroll: null,
    refreshDelay: 20,
    direction: DIRECTION_V
}

export default Scroll