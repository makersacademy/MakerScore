'use strict';

describe('Units test', function(){
    describe('when I call Units.get', function(){
        beforeEach(module('MakerScore'));
        it('returns 12 weeks', inject(function(Units){
            expect( Units.get().length ).toEqual(12);
        }));
    })
});