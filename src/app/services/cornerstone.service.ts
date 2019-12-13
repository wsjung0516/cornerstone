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

    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

    cornerstoneWADOImageLoader.webWorkerManager.initialize({
      maxWebWorkers: navigator.hardwareConcurrency || 1,
      startWebWorkersOnDemand : true,

      // webWorkerPath : '/node_modules/cornerstone-wado-image-loader/dist/cornerstoneWADOImageLoaderWebWorker.js',
      webWorkerPath : '/assets/cornerstone/webworkers/cornerstoneWADOImageLoaderWebWorker.js',
      taskConfiguration: {
        'decodeTask' : {
          codecsPath: '/assets/cornerstone/codecs/cornerstoneWADOImageLoaderCodecs.js'
        }
      }
    });

  }

  fetchDicomImage(url: string): Observable<any> {
    // console.log(`fetching ${url}`)
    return from(cornerstone.loadAndCacheImage(`wadouri:${url}`)).pipe(first());

  }

}
