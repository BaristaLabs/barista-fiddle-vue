<template>
  <md-tabs :md-dynamic-height="false">
    <md-tab id="movies" md-label="Movies">
      <div id="flex">
        <div id="flex-1">
          <p>asdf</p>
        </div>
        <div id="flex-2">fdsa</div>
      </div>
    </md-tab>
  
    <md-tab id="music" md-label="Music">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    </md-tab>
  
    <md-tab id="books" md-label="Books">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
    </md-tab>
  
    <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
    </md-tab>
  </md-tabs>
</template>

<script>
import Split from 'split.js'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: () => {
    console.log("yo, dawg");
    this.splitter = Split(['#flex-1', '#flex-2'], {
      size: [50, 50],
      minSize: [200, 200],
      elementStyle: function (dimension, size, gutterSize) {
        return {
          'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)'
        }
      },
      gutterStyle: function (dimension, gutterSize) {
        return {
          'flex-basis': gutterSize + 'px'
        }
      }
    })
  },
  destroyed: () => {
    console.log("boom.");
    this.splitter.destroy();
  }
}
</script>

<style>
.md-tabs .md-tabs-content {
  display: flex;
  flex: 1;
}

.md-tabs .md-tab {
  padding: 0;
  height: 100%;
}

#flex {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.gutter {
  background-color: #eee;

  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
  cursor: ew-resize;
}

.gutter.gutter-vertical {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: ns-resize;
}
</style>
