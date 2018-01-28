@extends('layouts.app')
@section('content')
    <div class="a_main">
        <div class="b_main">
            <div class="a_navigation" id="a_navigation">
                <div class="b_navigation">
                    <div class="c_navigation">
                        <ul v-for="a_list in a_navigation">
                            <li><a href="" :class="[a_list.name == '热门'? 'nav_item cur':'nav_item']">@{{ a_list.name }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="a_content">
                <div class="b_content">
                    <div class="c_content">
                        <div class="a_go" id="a_go">
                            <div class="b_go">
                                <div class="c_go clearfix">
                                    <nav>
                                        <ul class="nav nav-pills pull-left">
                                            <li v-for="a in a_go">
                                                <a v-bind="a.href">
                                                    <em class="W_ficon a_tb">@{{ a.a }}</em>
                                                    <em class="button_plain">@{{ a.name }}</em>
                                                </a>
                                            </li>
                                        </ul>
                                        <ul class="nav nav-pills pull-right a_nav">
                                            <li><a href="" class="b_button_plain">草稿</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div class="a_container" id="a_continer">
                            <div class="container" v-for="a in a_title">
                                <div class="row">
                                    <div class="a_title">
                                        <span>来源话题:</span>
                                        <span>@{{ a.a }}</span>
                                    </div>
                                    <div class="b_title">
                                        <span class="a_avatar"><img :src="a.b"></span>
                                        <span class="a_name">@{{ a.c }},</span>
                                        <span class="b_name">@{{ a.d }}</span>
                                    </div>
                                    <div class="aa_content">
                                        <div class="bb_content">
                                            <img src="images/uploads/lxl.jpg">
                                        </div>
                                        <div class="cc_content">
                                            <span>@{{ a.e }}...</span>
                                            <button>
                                                <span>阅读全文</span>
                                                <em class="W_ficon">c</em>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="aa_culomn">
                                        <nav>
                                            <ul class="nav nav-pills">
                                                <li>
                                                    <button>
                                                        <span class="aaa_title">参与人数：</span>
                                                        <span>@{{ a.f }}</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button>
                                                        <span class="aaa_title">时间：</span>
                                                        <span>@{{ a.g }}</span>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button>
                                                        <span class="aaa_title">特价：</span>
                                                        <span>@{{ a.h }}</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                        <nav>
                                            <ul class="nav nav-pills">
                                                <li>
                                                    <button class="bbb_title">
                                                        <span class="W_ficon">C</span>
                                                        @{{ a.i }}
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="aaa_title">提问</button>
                                                </li>
                                                <li>
                                                    <button class="aaa_title">修改</button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="a_sidebar" id="a_sidebar">
                <div class="b_sidebar">
                    <div class="container">
                        <ul class="aa_sidebar">
                            <li v-for="a in as">
                                <a href="" @mouseenter='a_color(a.name, a.i)' @mouseleave='b_color(a.name, a.i)'>
                                    <i class="fa" :class="a.c_lass"></i>
                                    <span class="a_g" :id="a.i">@{{ a.name }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="c_sidebar">
                    <div class="container">
                        <div class="row">
                            <nav>
                                <ul class="nav navbar-link">
                                    <li v-for="a in bs">
                                        <a v-bind:href="a.href" class="a_g">
                                            <i :class="a.a"></i>
                                            <span>@{{ a.name }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop

@section('script')
    <script src="js/vue/blog/blog.js"></script>
@stop