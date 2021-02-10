
import en from './en'
import tw from './tw'


class i18n {
    constructor(lang) {

        this.langDefault = en
        switch (lang) {
            case 'en':
                this.langBase = en
                break
            case 'tw':
                this.langBase = tw
                break
            default:
                this.langBase = en
                break
        }
    }
    t(key) {
        let text = this.langBase[key]
        if (!text) {
            text = this.langDefault[key] || [`this text doesnt have translation yet ${key}`]
            return text
        }
        return text
    }

}

export default i18n