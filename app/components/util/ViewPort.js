class ViewPort {
    constructor(width) {
        this.width = width;
        this.viewPortSize = this.getViewPortSize(width);
    }

    getViewPortSize(width) {
        if (width < 601) {
            return 'small';
        } else if (width > 600 && width < 993) {
            return 'medium';
        } else {
            return 'large';
        }
    }

    isSmall(){
        if (this.viewPortSize === 'small') {
            return true;
        } else {
            return false;
        }
    }

    isMedium(){
        if (this.viewPortSize === 'medium') {
            return true;
        } else {
            return false;
        }
    }

    isLarge(){
        if (this.viewPortSize === 'large') {
            return true;
        } else {
            return false;
        }
    }
}

export default ViewPort;