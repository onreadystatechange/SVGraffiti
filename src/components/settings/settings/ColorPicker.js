import ClrPicker from '../../../supports/colorpicker/ColorPicker';

export default class ColorPicker {

    constructor(container) {
        this.container = container;
        this.init(container);
    }

    init() {
        this.$view = document.createElement('div');
        this.$view.className = `setting_item`;

        this.clrPicker = new ClrPicker({
            el: this.$view,
            components: ['presets', 'gradient', 'depth', 'operator']
        });

        this.container.appendChild(this.$view);
    }

    getView() {
        return this.$view;
    }
}