const chai = require('chai');
const path = require('path');
const namespace = require(path.join(__dirname, '../src', 'namespace'));

describe('# Namespace', () => {

    it('Only one namespace', () => {
        namespace('App.Module.Section');
        chai.expect(JSON.stringify(global.App.Module.Section)).to.equal(JSON.stringify({}));
    });

    it('Multiple namespaces', () => {
        namespace('App.Module.SectionA', 'App.Module.SectionB', 'App.Module.SectionC');
        chai.expect(JSON.stringify(global.App.Module.SectionA)).to.equal(JSON.stringify({}));
        chai.expect(JSON.stringify(global.App.Module.SectionB)).to.equal(JSON.stringify({}));
        chai.expect(JSON.stringify(global.App.Module.SectionC)).to.equal(JSON.stringify({}));
    });

    it('Multiple array namespaces', () => {
        namespace(['App.Module.SectionA', 'App.Module.SectionB', 'App.Module.SectionC']);
        chai.expect(JSON.stringify(global.App.Module.SectionA)).to.equal(JSON.stringify({}));
        chai.expect(JSON.stringify(global.App.Module.SectionB)).to.equal(JSON.stringify({}));
        chai.expect(JSON.stringify(global.App.Module.SectionC)).to.equal(JSON.stringify({}));
    });

});
