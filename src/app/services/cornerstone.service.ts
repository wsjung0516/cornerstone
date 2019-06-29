import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { first } from 'rxjs/operators';
import { from } from 'rxjs';
import { filter, map, } from 'rxjs/operators';

declare const cornerstone;
declare const cornerstoneWADOImageLoader;

@Injectable()

export class CornerstoneService {

  constructor() {


    cornerstoneWADOImageLoader.webWorkerManager.initialize({
      webWorkerPath : '/assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
      taskConfiguration: {
        'decodeTask' : {
          codecsPath: '/assets/cornerstone/codecs/cornerstoneWADOImageLoaderCodecs.js'
        }
      }
    });

  }

  fetchDicomImage(url: string): Observable<any> {
    console.log(`fetching ${url}`)
    return from(cornerstone.loadAndCacheImage(`wadouri:${url}`)).pipe(first());

  }

}
