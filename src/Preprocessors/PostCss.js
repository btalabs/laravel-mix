let Preprocessor = require('./Preprocessor');

class PostCss extends Preprocessor {
    /**
     * PostCss is invoked by the base Preprocessor class so we do not
		 * need to specify any additional loaders
     */
    loaders(sourceMaps) {
        return [];
    }
}

module.exports = PostCss;
