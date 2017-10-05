<template>
	<div class="div-wrap">
		<div class="list-wrap">
			<ul class="list">
				<li v-for="list in recomList" class="list-items">
					<router-link :to="list.clickUrl" class="item">
						<div class="item-desc">
							<div class="img-wrap">
								<img v-lazy="list.image" class="inner-img">
							</div>
							<div class="desc">
								{{list.desc}}
							</div>
						</div>
						<div class="itemInfo">
							<div class="name">
								{{list.name}}
							</div>
							<div class="price">
								¥ {{list.price}}
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      recomList: [
        {
          'clickUrl': '/detail',
          'image': 'static/img/mech/a-a8df18f9/a_icon.jpg',
          'desc': 'desc11',
          'name': 'name11',
          'price': 1111
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/b-0411258d/b_icon.jpg',
          'desc': 'desc12',
          'name': 'name12',
          'price': 1212
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/h-50abded7/h_icon.jpg',
          'desc': 'desc21',
          'name': 'name21',
          'price': 2121
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/c-836393bd/c_icon.jpg',
          'desc': 'desc22',
          'name': 'name22',
          'price': 2222
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/d-b448a0d4/d_icon.jpg',
          'desc': 'desc31',
          'name': 'name31',
          'price': 3131
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/d-b818a9c7/d_icon.jpg',
          'desc': 'desc32',
          'name': 'name32',
          'price': 3232
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/d-d1e493e0/d_icon.jpg',
          'desc': 'desc41',
          'name': 'name41',
          'price': 4141
        },
        {
          'clickUrl': '/',
          'image': 'static/img/mech/e-c0f2020f/e_icon.jpg',
          'desc': 'desc42',
          'name': 'name42',
          'price': 4242
        }
      ]
    }
  }
}
</script>

<style scoped>
.list-wrap {
	width: 100%;
	padding-top: 1.10667rem;
}

.list-items {
	width: 4.42245rem;
	display: inline-block;
	margin-right: .10667rem;
  margin-bottom: .10667rem;
}

.item-desc {
	background: #F1ECE2;
	width: 4.42235rem;
}

.img-wrap {
	width: 100%;
  height: 2.95043rem;
}

.item {
	text-decoration:none;
}

.desc {
	font-size: .32rem;
	color: #9F8A60;
	text-align: left;
	line-height: .48667rem;
	padding-left: .13333rem;
}

.name {
	font-size: .37333rem;
	color: #333;
	text-align: left;
	padding-left: .13333rem;
}

.price {
	font-size: .42667rem;
	color: #b4282d;
	text-align: left;
	padding-left: .13333rem;
}
</style>